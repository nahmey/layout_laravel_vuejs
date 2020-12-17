docReady(function() {
    let body = document.getElementsByTagName('body')[0];
    let sidebar = document.getElementById('sidebar');
    let sidebarMenu = document.getElementById('sidebarMenu');
    let navItem = sidebar.getElementsByClassName('menu-deroulant');
    let base_height = 0;
    let sidebar_ul = document.getElementById('sidebar_ul');
    let header = document.getElementById('header');
    let profileMenu = document.getElementById('profileMenu');


    if(window.screen.availWidth <= 430){
        sidebar.style.width = 0 + 'px';
        sidebarMenu.style.display = 'none';
    }

    const color = '#343a40';
    const text = '#cfcfcf';
    const textHover = '#99d066';
    changeSidebarColor(color);
    changeSidebarTextColor(text)
    changeSidebarHoverTextColor(textHover)



    changeMenu();
    displayScrollBar();

    [].forEach.call(document.getElementsByClassName('menu-deroulant'), function(el) {
        el.addEventListener('click', function() {
            let nav_item_slidedown = this.nextElementSibling;
            menuDeroulant(this, nav_item_slidedown);
                displayScrollBar();
        }, false)
    });


    const menuButton = document.getElementById('toggleMenuIcon');
    menuButton.addEventListener('click', function(){
        if(sidebar.style.width == 0+'px' || sidebar.style.width == 0){
            sidebar.style.width = 250 + 'px';
            sidebarMenu.style.display = 'block';
        }else{
            sidebar.style.width = 0;
            sidebarMenu.style.display = 'none';
        }
    })
});


function changeSidebarColor(color)
{
    console.log(color)
    document.getElementById('sidebar_color').value = color;
    sidebar.style.backgroundColor = color;
    header.style.backgroundColor = color;
}

function changeSidebarTextColor(color)
{
    console.log(color)
    document.getElementById('sidebar_text_color').value = color;
    sidebar.style.color = color
    header.style.color = color;
    profileMenu.style.color = color;

    let anchors = sidebar.getElementsByTagName('a');

    for(let i = 0; i < anchors.length; i++){
        let anchor = anchors[i];
        anchor.style.color = color;
        anchor.addEventListener("mouseout", mOut, false);

        function mOut() {  
           anchor.setAttribute("style", "color:"+color+";")
        }
    }
}

function changeSidebarHoverTextColor(color)
{
    console.log(color)
    document.getElementById('sidebar_text_hover_color').value = color;

    let anchors = sidebar.getElementsByTagName('a');

    for(let i = 0; i < anchors.length; i++){
        let anchor = anchors[i];
        anchor.addEventListener("mouseover", mOver, false);

        function mOver() {
           anchor.setAttribute("style", "color:"+color+";")
        }
    }
}

function resetDefautColor()
{
    color = '#343a40';
    text = '#cfcfcf';
    textHover = '#99d066';
    changeSidebarColor(color);
    changeSidebarTextColor(text)
    changeSidebarHoverTextColor(textHover)
}


function displayScrollBar()
{

    setTimeout(function(){
        if(sidebarMenu.offsetHeight >= 500){
            sidebar_ul.style.overflowY = "scroll";
        }else{
           sidebar_ul.style.overflowY = "hidden"; 
        }
    }, 500)
}


function menuDeroulant(item, nav_item_slidedown)
{                
    let lis = nav_item_slidedown.getElementsByTagName('li');
    let height = 0;

    for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        el_height = window.getComputedStyle(li, null).getPropertyValue("height");
        height = height + parseInt(el_height);
    }

    if(!nav_item_slidedown.classList.contains('active')){
        nav_item_slidedown.classList.add('active');
        if(nav_item_slidedown.id != 'sidebar_ul'){
           nav_item_slidedown.style.height = height + 'px'; 
        }
    }else{
        nav_item_slidedown.classList.remove('active');
        nav_item_slidedown.style.height = 0 + 'px';
    }
}



function changeMenu(url = null)
{
    let sidebar = document.getElementById('sidebar');

        let selector = sidebar.getElementsByTagName('a');
        for (var i = 0; i < selector.length; i++) {
            let item = selector[i];
            item.closest('li').classList.remove('active');

            if(item.closest('li').previousElementSibling != null){
                item.closest('li').previousElementSibling.classList.remove('active');
            }
            if(item.closest('ul').previousElementSibling != null){
                item.closest('ul').previousElementSibling.classList.remove('active');
            }

            if(window.location.href == item.href && url == null){
                setTimeout(function(){
                    item.closest('li').classList.add('active');
                    if(item.closest('li').closest('ul').previousElementSibling){
                        item.closest('li').closest('ul').previousElementSibling.classList.add('active');
                    }
                    
                }, 0.1)
                
                let nav_item_slidedown = item.closest('ul');
                if(!nav_item_slidedown.classList.contains('active')){
                    menuDeroulant(item, nav_item_slidedown)
                }
            }else if(url != null && item.href == base_url + '/' +url){
                setTimeout(function(){
                    item.closest('li').classList.add('active');
                    if(item.closest('li').closest('ul').previousElementSibling){
                        item.closest('li').closest('ul').previousElementSibling.classList.add('active');
                    }
                    
                }, 0.1)

                let nav_item_slidedown = item.closest('ul');
                if(!nav_item_slidedown.classList.contains('active')){
                    menuDeroulant(item, nav_item_slidedown)
                }
            }
        }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    displayScrollBar();
}


// function changeSideBarColor(color, text, textHover)
// {
//     console.log(color)
//     getColor(color)


//     sidebar.style.backgroundColor = color;
//     sidebar.style.color = text
//     header.style.backgroundColor = color;
//     header.style.color = text;
//     profileMenu.style.color = text;

//     let anchors = sidebar.getElementsByTagName('a');

//     for(let i = 0; i < anchors.length; i++){
//         let anchor = anchors[i];
//         anchor.style.color = '#cfcfcf';
//         anchor.addEventListener("mouseover", mOver, false);
//         anchor.addEventListener("mouseout", mOut, false);

//         function mOver() {
//            anchor.setAttribute("style", "color:"+textHover+";")
//         }

//         function mOut() {  
//            anchor.setAttribute("style", "color:"+text+";")
//         }
//     }
// }
