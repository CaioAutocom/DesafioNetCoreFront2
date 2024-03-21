import { environment } from "../../environments/environment";

export const API_ENDPOINTS = {
    // Api url
    
    apiUrl : environment.apiUrl,
    // Auth
    newAccount: '/api/new-account',
    login: '/api/login',
    
    // Person
    addPeron: '/person',
    updatePerson: '/person,',
    getAllPersons: '/person',
    deletePerson: '/person',
    getPersonByShortId: '/person/get-by-shortid?shortid=',
    getClients: '/get-clients',
    
    // Product
    addProduct: 'product',
    updateProduct: 'product',
    getAllProducts: 'product',
    deleteProduct: 'product',
    getProductByShortId: 'get-by-short-id',

    getAllVendableProducts: 'get-all-vendable-products',

    // Unit
    addUnit: 'unit',
    updateUnit: 'unit',
    getAllUnits: 'unit',
    deleteUnit: 'unit',
    getUnitByShortId: 'get-by-short-id',

    // User
    addUser: 'user',
    getAllUsers: 'user',
    getAllAdminUsers: 'get-admin-users',
    getAllManagerUsers: 'get-manager-users',
    getAllSellersUsers: 'get-sellers-users'
    
  };