<template>
  <div @click="Logout()"><button type="button" class="btn btn-danger m-5 position-absolute top-0 end-0 w-25">Log Out</button></div>
  <div class="d-flex justify-content-center">
    <div style="margin-top: 10rem">
      <div class="m-5 border border-secondary border border-3 w-100 bg-light">
        <div class="d-flex justify-content-center m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          <h1 class="m-3">เพิ่มเมนูได้นะครับ!!!!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
        <div>
          <div class="d-flex justify-content-center m-3">
            ชื่อเมนูไทย :
            <input type="text" name="" v-model="menu.nameTH" style="width: 30rem" /><br />
          </div>
          <div class="d-flex justify-content-center m-3">
            ชื่อเมนู ENG :
            <input
              type="text"
              name=""
              v-model="menu.nameENG"
              style="width: 30rem"
            /><br />
          </div>
          <div class="d-flex justify-content-center m-3">
            ราคา( บาท ): <input type="number" v-model="menu.price" style="width: 30rem" /><br />
          </div>
          <div class="d-flex justify-content-center m-3">
            รายละเอียด :
            <input type="text" name="" v-model="menu.detail" style="width: 30rem" /><br />
          </div>
        </div>
        <div class="m-3 row gap-3">
          <button class="col m-3" @click="($event) => abbUser()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
              />
            </svg>
          </button>
          <button class="col m-3" @click="($event) => showMenu()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-menu-button-wide-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <br />
        <div class="container">
          <div class="row w-100 ">
            <table class="table m-3 ">
              <thead class="table-dark">
                <tr>
                  <td class="col">ชื่อ</td>
                  <td class="col">Eng</td>
                  <td class="col">ราคา</td>
                  <td class="col">รายละเอียด</td>
                  <td class="col"></td>
                </tr>
              </thead>
              <tr v-for="(menu, index) in allMenu" :key="index">
                <td class="col">{{ menu.data.nameTH }}</td>
                <td class="col">{{ menu.data.nameENG }}</td>
                <td class="col">{{ menu.data.price }}</td>
                <td class="col">{{ menu.data.detail }}</td>
                <td class="col">
                  {{ menu.data.id }}
                  <button @click="($event) => deleuserData(menu.id)">-</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from "firebase/auth";

import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { ref } from "vue";
//import router from "../router";
import { db } from "../main.js";
import router from "../router";

const menu = ref({ nameTH: "", nameENG: "", price: 0, detail: "" });
const allMenu = ref([]);
async function abbUser() {
  try {
    const docRef = await addDoc(collection(db, "FoodMenu"), menu.value);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function Logout(){
  router.push("/");

}
async function showMenu() {
  const querySnapshot = await getDocs(collection(db, "FoodMenu"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const mydoc = ref({ id: doc.id, data: doc.data() });
    allMenu.value.push(mydoc.value);
  });
}
async function deleuserData(id) {
  await deleteDoc(doc(db, "FoodMenu", id));
  await deleteDoc(doc(db, "FoodMenu", allMenu.value.pop(id)));
}
</script>
