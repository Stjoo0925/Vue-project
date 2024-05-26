<template>
    <div>
      <h1>User Profile</h1>
      <p>User ID: {{ $route.params.id }}</p>
      <!--$route.params.id : 라우트의 id 파라미터에 접근-->
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile'
  };
  </script>
  
  <style scoped>
  /* 스타일 정의 */
  </style>