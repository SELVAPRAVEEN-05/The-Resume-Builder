import API from './axios';

export const getSkills = async () =>{
    const res = await API.get('/skills');
    // console.log(res);
    return res.data.skills || [];
}

export const getCompanies = async () =>{
    const res = await API.get('/companies');
    // console.log(res);
    return res.data.companies || [];
}

export const getColleges = async () =>{
    const res = await API.get('/colleges');
    // console.log(res);
    return res.data.colleges || [];
}

export const getLanguages = async () =>{
    const res = await API.get('/languages');
    // console.log(res);
    return res.data.languages || [];
}

export const getDegrees = async () =>{
    const res = await API.get('/degrees');
    // console.log(res);
    return res.data.degrees || [];
}

export const getSpecializations = async () =>{
    const res = await API.get('/specializations');
    // console.log(res);
    return res.data.specializations || [];
}

