# RCO-test
Vue.js SPA mini observing system


Создать SPA с использованием Vue.js, реализующее веб-интерфейс для мини-системы мониторинга потока новостных сообщений.

 

Приложение содержит следующие блоки:

1. Блок ограничений (верхняя панель). Служит для задания временного интервала поступления новостей и выбора источников - новостных лент.

2. Блок навигации (нижняя левая панель). Служит для навигации по результатам аналитической обработки новостей в различных срезах: по упоминанию ситуации, персоны, организации, геопонятий, прочих объектов.

Срез выбирается при помощи закладок. При выборе закладки выдается перечень элементов в виде двухуровневого дерева. Узлами дерева являются ситуации и объекты-участники ситуаций.

3. Блок просмотра (правая нижняя панель). Служит для отображения информации как в сжатом табличном виде, так и в виде фрагментов текста новостей. Выбор строки таблицы приводит к фильтрации списка фрагментов текста (видимыми остаются только фрагменты, являющиеся подтверждением выбранной ситуации). Подтверждающий текст содержит логотип источника, дату публикации новости, заголовок новости, основной объект в выявленной ситуации, предложение с описанием ситуации. При выборе заголовка сообщения в списке фрагментов во всплывающем окне выдается текст сообщения.

 

Пример готового приложения:

http://rco-demo.rco.ru/factExtractor/

Элементы оформления можно брать оттуда.

Допускается оформить с учетом собственного вкуса.

Допускается использовать готовые компоненты.

 

Страница с описанием API:

http://addr.rco.ru/fxweb/swagger/

api_key - не нужен

 

В вызовах

name_id - ИД объекта (Путин (3147081), Володин (3356573), ...)

attribute_id - ИД ситуации/факта (говорит косвенно(700), намеревается, участвует в мероприятиях, ...)

tab_id - ИД среза/закладки (Ситуации (0), Персоны (1), Организации, География, ...).

source_id - ИД источника (rian.ru (2), gazeta.ru (7), ...). При отладке можно оставлять пустым.

time_frame_id - ИД интервала времени (3 часа (3), 2 часа (2), ...)

 

Изучайте, делайте тестовые вызовы.

API в части формирования таблицы фактов и списка подтверждений м.б. недостаточно для точного воспроизведения данного демо.
