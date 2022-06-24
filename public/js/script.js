

import Home from "./views/Home";
import Category from "./views/Category";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";

const navigateTo= url => {
    history.pushState(null,null,url)
    router()
}



const router = async()=>{
    const routes =[
        {path:"/404",view:console.log('404')},
        {path:"/",view:Home},
        {path:"/categories",view:Category},
        {path:"/about",view:About},
        {path:"/login",view:Login},
        {path:"/register",view:Register}
        
    ];

    const potentialMatches = routes.map(route=>{

        return {
            route:route,
            isMatch:location.pathname===route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match){
        match={
            route:routes[0],
            isMatch:true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML= await view.getHtml();

    console.log(view)
}

window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded",()=>{

    document.body.addEventListener('click',e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })

    router();
})