<template>
    <div class="dropdown al-inline-block al-padding-v12">
        <button type="button" class="btn al-filter-button dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            NameOfFilter
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">option1</a></li>
            <li><a class="dropdown-item" href="#">option2</a></li>
            <li><a class="dropdown-item" href="#">option3</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'FilterButton',
}
</script>