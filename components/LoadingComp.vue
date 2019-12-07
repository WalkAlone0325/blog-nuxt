<template>
  <div class="loading-page">
    <ul>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.loading-page {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      width: 30px;
      height: 30px;
      background: #ffffff;
      border-radius: 50%;
      animation: animate 1.6s ease-in-out infinite;
      &:nth-child(1) {
        animation-delay: -1.4s;
        background: #ffff00;
        box-shadow: 0 0 50px #ffff00;
      }
      &:nth-child(2) {
        animation-delay: -1.2s;
        background: #76ff03;
        box-shadow: 0 0 50px #76ff03;
      }
      &:nth-child(3) {
        animation-delay: -1s;
        background: #f06292;
        box-shadow: 0 0 50px #f06292;
      }
      &:nth-child(4) {
        animation-delay: -0.8s;
        background: #4fc3f7;
        box-shadow: 0 0 50px #4fc3f7;
      }
      &:nth-child(5) {
        animation-delay: -0.6s;
        background: #ba68c8;
        box-shadow: 0 0 50px #ba68c8;
      }
      &:nth-child(6) {
        animation-delay: -0.4s;
        background: #f57c00;
        box-shadow: 0 0 50px #f57c00;
      }
      &:nth-child(7) {
        animation-delay: -0.2s;
        background: #673ab7;
        box-shadow: 0 0 50px #673ab7;
      }
    }
  }
  @keyframes animate {
    0%,
    40%,
    100% {
      transform: scale(0.2);
    }
    20% {
      transform: scale(1);
    }
  }
}
</style>
