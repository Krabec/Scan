import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import HistogramsService from "../services/HistogramsService";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
    isAuth = false;
    eventFiltersInfo = {};


    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setEventFiltersInfo(eventFiltersInfo) {
        this.eventFiltersInfo = eventFiltersInfo;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            this.setAuth(true);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('login', email)
            localStorage.setItem('password', password)
            const resp = await axios.get(`${API_URL}/info`, {
                headers: `Authorization: Bearer ${localStorage.getItem('token')}`
            })
            this.setEventFiltersInfo(resp.data.eventFiltersInfo);
            window.location.assign('/Scan/#/');
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('login');
            localStorage.removeItem('password');
            this.setAuth(false);
            this.setEventFiltersInfo({});
            window.location.assign("/Scan/#/");
    }

    async checkAuth() {
        try {
            const login = localStorage.getItem('login');
            const password = localStorage.getItem('password');
            const response = await AuthService.login(login, password);
            this.setAuth(true);
            localStorage.setItem('token', response.data.accessToken);
            const resp = await axios.get(`${API_URL}/info`, {
                headers: `Authorization: Bearer ${localStorage.getItem('token')}`
            })
            this.setEventFiltersInfo(resp.data.eventFiltersInfo);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async histograms(dataStart, dataEnd, inn, fullness, limit) {
        try {
            const response = await HistogramsService.histograms(dataStart, dataEnd, inn, fullness, limit);
            console.log(response)
            //window.location.assign('/Scan/#/');
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}