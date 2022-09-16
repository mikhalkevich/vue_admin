<template>
  <main class="container break">
    <HeaderPage name="Ресурсно-компонентное программирование"
                description="Ресурсно-компонентное программирование - это вид программирования с разделением на бэкенд и фронтенд. При разработке веб-приложений на стороне фронтенда разрабатываются компоненты, на стороне бэкенда - ресурсы."/>
    <div class="row mb-2">
      <HalfPart name="Laravel" name_class="d-inline-block mb-2 text-success" title="Ресурсы"
                description="Для разработки ресурсов на стороне бэкенда используем Laravel"/>
      <HalfPart name="Vue.js" name_class="d-inline-block mb-2 text-success" title="Компоненты"
                description="Компоненты разрабатываются на сторне фронтенда с помощью Vue.js"/>

    </div>

    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Тема следующего занятия:
        </h3>
       <BlogList  />
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">About</h4>
            <p class="mb-0">Разработка </p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Занятия</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">Введение</a></li>
              <li><a href="#">1. Фронтенд. Установка Node.js и Vue Cli.</a></li>
              <li><a href="#">2. Фронтенд. Создание и запуск фронтенда с помощью менеджер Vue.</a></li>
              <li><a href="#">3. Фронтенд. Базовый компонент и шаблонизация</a></li>
              <li><a href="#">4. Фронтенд. Вспомогательные компоненты. Компонент MenuTop</a></li>
              <li><a href="#">5. Бэкенд. Осноы разработки бэкенда. Установка и настройка Laravel</a></li>
              <li><a href="#">6. Бэкенд. Авторизация Sunctum</a></li>
              <li><a href="#">7. Фронтенд. Axios. Базовые настройки, открытые и закрытые запросы</a></li>
              <li><a href="#">8. Бэкенд. Ресурсы Catalog и Product</a></li>
              <li><a href="#">14 сентября 2022</a></li>
              <li><a href="#">21 сентября 2022</a></li>
              <li><a href="#">28 сентября 2022</a></li>
            </ol>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Ссылки</h4>
            <ol class="list-unstyled">
              <li><a href="#">Youtube</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import HeaderPage from "@/components/templates/HeaderPage";
import HalfPart from "@/components/templates/HalfPart";
import BlogList from "@/components/templates/BlogList";

export default {
  name: 'IndexView',
  components: {
    HeaderPage,
    HalfPart,
    BlogList
  }
}
</script>


