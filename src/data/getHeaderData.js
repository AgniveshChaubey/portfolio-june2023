import resume from "../assets/pdf/resume.pdf";
import profilePhoto from "../assets/png/profilePhoto.jpg";
import axios from "axios";

// export const headerData = {
//   name: "Agnivesh Chaubey",
//   title: "Full Stack Developer",
//   desciption:
//     "Amidst lines of code and endless possibilities, he found his passion. The rhythm of logic and the symphony of algorithms captured his attention. With every keystroke, he knew he was shaping a digital world, one elegant solution at a time. ",
//   image: profilePhoto,
//   resumePdf: 'https://github.com/AgniveshChaubey/portfolio-resume/blob/main/Agnivesh%20Chaubey-v7.1.pdf',
// };

let headerDataApi;

export const getHeaderData = () => {
  if (headerDataApi) {
    return Promise.resolve(headerDataApi);
  }

  return axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=GJc1QFVfUW0snwabfYVRudu90cgoDULpwS7A-95tjOZywlR2WKIXfjVYsylC74Kw_CgMnsj-UvIFvMeyh7-q18LEzAW4gqzOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMQY0QhVaL9LeIV-uj0QWIhtw70K0FUM9zDsxe1OXbLhael2yEK4rTxTEAPCOnYN-0tpJx3GSKgLZHmbYrRSnBsdoveQtGc0fg&lib=Mps49Vhg3p8AoRJi0AHaT_7U2UhZLtYfG')
    .then(response => {
      headerDataApi = response.data[0];
      return headerDataApi;
    })
    .catch(error => {
      console.error(error);
      // headerDataApi = {
      //   name: "Agnivesh Chaubey",
      //   title: "Full Stack Developer",
      //   description: "Amidst lines of code and endless possibilities, he found his passion. The rhythm of logic and the symphony of algorithms captured his attention. With every keystroke, he knew he was shaping a digital world, one elegant solution at a time.",
      //   image: profilePhoto,
      //   resumePdf: 'https://github.com/AgniveshChaubey/portfolio-resume/blob/main/Agnivesh%20Chaubey-v7.1.pdf',
      // };
      return headerDataApi;
    });
};



