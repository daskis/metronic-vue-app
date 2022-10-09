<template>
  <div class="wrapper__main">
    <div class="menu">
      <div class="menu__logo">
        <img src="@/assets/default-small.svg" alt="logo">
      </div>
      <div class="menu__person">
        <img src="@/assets/img.jpg" alt="">
        <p class="menu__person__name">Lorem ipsum dolor.</p>
        <p class="menu__person__place">Lorem ipsum dolor.</p>
      </div>
    </div>
    <div class="content">
      <div class="content__title">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div class="content__main">
        <div class="content__info">
          <img class="content__search__img" src="@/assets/search_icon.svg" alt="">
          <input type="text" class="content__search" placeholder="Search">
          <div class="content__buttons">
            <button class="btn main__btn">
              <img src="@/assets/filter.svg" alt="">
              Filter</button>
            <button class="btn main__btn">
              <img src="@/assets/export.svg" alt="">
              Export</button>
            <button class="btn main__btn main__btn__add">Add request</button>
          </div>
        </div>
        <div class="content__main__names">
          <div class="content__name__example">
            <input type="checkbox" class="content__checkbox">
            <label class="content__checkbox__text content__example content__name__example">Customer name</label>
          </div>
          <div class="content__example content__email__example">email</div>
          <div class="content__example content__company__example">Company</div>
          <div class="content__example content__pay__example">Payment method</div>
          <div class="content__example content__created__example">Created date</div>
          <div class="content__example content__action__example">Actions</div>
        </div>
        <div class="content__wrapper" v-for="item in exampleInfo" :key="item.id">
          <div class="content__name">
            <input type="checkbox" class="content__checkbox">
            <label class="content__checkbox__text">{{item.name}}</label>
          </div>
          <div class="content__email">{{item.email}}</div>
          <div class="content__company">{{ item.company }}</div>
          <div class="content__pay">{{ item.payment }}</div>
          <div class="content__created">{{ item.date }}</div>
          <div class="content__action">Actions</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exampleInfo: [
        {id : 1, name: "example name 1", email: "example email 1", company: "-", payment: "00000000", date:
              "14 Dec 2020, 4:12pm"},
        {id : 2, name: "example name 2", email: "example email 2", company: "-", payment: "00000000", date:
              "14 Dec 2020, 4:12pm"},
        {id : 3, name: "example name 3", email: "example email 3", company: "-", payment: "00000000", date:
              "14 Dec 2020, 4:12pm"},
        {id : 4, name: "example name 4", email: "example email 4", company: "-", payment: "00000000", date:
              "14 Dec 2020, 4:12pm"},
        {id : 5, name: "example name 5", email: "example email 5", company: "-", payment: "00000000", date:
              "14 Dec 2020, 4:12pm"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper__main {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;


}
.main__btn {
  display: flex;
  align-items: center;
  margin-left: 12px;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  font-weight: 600;
  color: #0095e8;
  background-color: rgba(0, 149, 232, 0.1);
  &:nth-child(2) img {
    transform: rotate(270deg);
  }

  &__add {
    background-color: #0095e8;
    color: white;
  }
  & img {
    margin-right: 4px;
    width: 20px;
  }

}
.content {
  max-width: 80%;
  width: 100%;
  height: 100vh;
  background-color: #F9FAFB;
  padding: 24px;
  &__wrapper {
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex: 1 1 20%;
    justify-content: space-between;
  }
  &__name {
    color: black;
    display: flex;
    align-items: center;
    font-weight: 600;
    & input {
      margin-right: 30px;
    }
  }
  &__checkbox {
    width: 18px;
    height: 18px;
  }
  &__example {
    text-transform: uppercase;
    color: rgba(128, 128, 128, 0.7);
    font-size: 0.9rem;
    font-weight: 600;
  }
  &__name {
    &__example {
      display: flex;
      align-items: center;
      & input {
        margin-right: 30px;
      }
    }


  }
  &__buttons {
    display: flex;
  }
  &__title {
    padding: 20px;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02);
    border-radius: 10px;
    margin-bottom: 20px;
  }
  &__main {
    padding: 30px;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02);
    border-radius: 10px;
    position: relative;
    &__names {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      flex: 0 0 20%;
      justify-content: space-between;
    }

  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &__search {
    background-color: rgba(134, 134, 134, 0.1);
    border: none;
    border-radius: 5px;
    position: relative;
    padding: 12px 5px 12px 45px;
    font-size: 1.1rem;
    &__img {
      position: absolute;
      top: 38px;
      width: 30px;
      left: 40px;
    }
    &:after {
      content: "";
      background-image: url("@/assets/search_icon.svg");
    }
  }


}


.menu {
  padding: 50px 20px;
  max-width: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  background-color: #EFE9E1;

  &__person {
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      max-width: 100px;
      border-radius: 10px;
      margin-bottom: 12px;
    }

    &__name {
      color: #3F4254;
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    &__place {
      font-size: 0.8rem;
    }

  }

  &__logo {
    display: flex;
    margin-bottom: 55px;
    justify-content: center;

    & img {
      width: 160px;
    }
  }
}
</style>