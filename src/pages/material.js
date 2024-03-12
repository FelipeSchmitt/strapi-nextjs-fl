// pages/sua-pagina.js

import React from 'react';

export default function SuaPagina({ data }) {
  return (
    <div>
      {/* Renderize os dados recebidos da API aqui */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  // URL da API do Strapi
  const apiUrl = 'http://localhost:1337/api/materials/1';

  // Token de autenticação
  const token = 'd782a551627f798f3e682306366d2accbfd056bad33ecaee7e20fc52228bc2f88f5f333b328a12e390812c88ea223513c94ca64b0b90cb959f17432d23552257952639fba392504fe929b1c5bed3979d1e37334b452b103212938db08a5d38d6df315da1dab93d541dbb6ef067794ff7bc9e93e8cdff4c570c5a95699a527806';

  // Fazendo a solicitação GET para a API do Strapi com o token de autenticação
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}` // Adiciona o token de autenticação no cabeçalho de autorização
    }
  });

  if (!response.ok) {
    throw new Error('Erro ao acessar a API do Strapi: ' + response.statusText);
  }

  const data = await response.json();

  // Retorna os dados como props para a página
  return {
    props: {
      data
    }
  };
}

