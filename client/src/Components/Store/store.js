import create from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  users: {
    Surname: "",
    otherNames: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmedPassword: "",
  },
}));
