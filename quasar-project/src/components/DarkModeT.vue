<template>
  <q-btn
    class="darkMode"
    flat
    round
    @click="$q.dark.toggle()"
    :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
  />
</template>

<script></script>
