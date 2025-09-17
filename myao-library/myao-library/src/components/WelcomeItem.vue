<template>
  <div class="item">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  margin: 20px 0;
}

.icon {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.details {
  flex: 1;
}

h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}
</style>
