import {sidemenu, newsales, viewproduct, reload} from './Type'

export const sideMenu =(data) =>{
    return {
        type:sidemenu,
        data:data
    }
}

export const newSales =(data) =>{
    return {
        type:newsales,
        data:data
    }
}

export const viewProduct =(data) =>{
    return {
        type:viewproduct,
        data:data
    }
}

export const Reload =() =>{
    return {
        type:reload       
    }
}

