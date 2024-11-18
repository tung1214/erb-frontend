    let tabs = [
        {
            title:'Neon Lights',
            type:'CopperHandcrafted'
        },
        {
            title:'Pottery Class',
            type:'neonLights'
        },

        {
            title:'Tufting Workshop',
            type:'PotteryClass'
        },

        {
            title:'Silver Workshop',
            type:'TuftingWorkshop'
        },
    ];

    let products = {
        CopperHandcrafted:[{
            id:1,
            span:'HTML is the standard markup language for creating web pages and web applications.',
            price:599,
            state:true,
            count:1,
            href:'./addcart.html',
            url:'',
            courseTop:"Get creative with Neon Lights",
            courseShortDes:"Study workshop offering a fun and engaging experience for individuals of all skill levels. With a passionate team, he provides hands-on workshops where participants can create their own unique neon lights, guided every step of the way.",
            img:"./images/sg.jpg",
            time:"14 December 2024 ; 2:00-5:00pm ",
        }],
        neonLights:[{
            id:3,
            url:'./Interset_Introduce.html',
            name:"html",
            title:'HTML - HyperText Markup Language',
            span:'HTML is the standard markup language for creating web pages and web applications.',
            price:98,
            state:true,
            count:1,
            href:'./index.html',
            courseTop:"Discover the joy of creating",
            courseShortDes:"Look no further than Pottery Study Workshop, your go-to destination for pottery and ceramics lessons in the heart of Hong Kong!",
            img:"./images/5453.jpg",
            time:"14 December 2024 ; 2:00-5:00pm ",
            courseDescription_p:"Gromwell Soap Workshop",
            a:"萃取紫草根的天然草本精華，或能舒緩並調理肌膚不適感，特別適合痘痘肌、濕疹的預防及治療。",
            Student:"課堂為小班教學，師生比例為1:4",
            smallAge:"",
            bigAge:''
            // smallAge:"4-8歲",
            // bigAge: "9-15歲",
            // 第一堂 拉坯 （杯） 第二堂 拉坯 （碗） 第三堂 手捏 handle/裝飾 第四堂 手捏碟 第四堂 手捏碟 第五堂 上釉 第六堂 上釉
            // 第一堂 拉坯 （杯）第二堂 拉坯 （碗） 第三堂 修杯 
        }],
        PotteryClass:[{
            id:5,
            name:"html",
            url:'./Interset_Introduce.html',
            title:'HTML - HyperText Markup Language',
            span:'HTML is the standard markup language for creating web pages and web applications.',
            price:328,
            state:true,
            count:1,
            href:'./index.html',
            courseTop:"Create the rug of your dreams",
            courseShortDes:"。At the end of the workshop, your rug will be finished and you can take it with you immediately.",
            img:"./images/dd76.jpg",
            icon:"課程內容",
            courseDescription_p:"4-17歲暑期綜合陶藝班 （拉坯+ 手捏）[7-8月］",
            a:"在教師指導下，將學習如何使用彩繪技法在亞加力板上創作出獨一無二的圖案，打造出玻璃彩繪的質感。活動從基本的色彩混合和圖案設計開始，無論您是初學者還是有經驗的藝術愛好者，都能發揮創意，製作充滿個人風格的作品。",
            Student:"課堂為小班教學，師生比例為1:4",
            smallAge:"",
            bigAge: ""
            // 第一堂 拉坯 （杯） 第二堂 拉坯 （碗） 第三堂 手捏 handle/裝飾 第四堂 手捏碟 第四堂 手捏碟 第五堂 上釉 第六堂 上釉
            // 第一堂 拉坯 （杯）第二堂 拉坯 （碗） 第三堂 修杯 
            // ．課程對象：任何人士 ．課程時長：1.5 小時 ．課程人數：一人成班 ．課程成品：亞加力板玻璃彩繪燈 ．課程地點：紅磡區 (近黃埔站) 備註：．費用已包括上堂工具及所需材料 ．工作坊會於報讀課程後聯絡確認時間
        }],
        TuftingWorkshop:[{
            id:6,
            name:"html",
            url:'./Interset_Introduce.html',
            span:'HTML is the standard markup language for creating web pages and web applications.',
            price:198,
            state:true,
            count:1,
            href:'./shopping.html',
            courseTop:"Get creative with Silver",
            courseShortDes:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque vel quos mollitia consequuntur corporis atque id amet consectetur molestias assumenda laudantium et, perspiciatis modi, velit, hic expedita nesciunt architecto omnis sunt obcaecati repudiandae. Quasi dolore, cumque nobis optio deserunt vitae omnis tempore quis aliquam, laborum, non perspiciatis minima eum.",
            img:"./images/sliver-title.png",
            icon:"課程內容",
            courseDescription_p:"Art Soap Workshop🖼️",
            a:"藝術皂體驗坊～竹炭漸層潔面皂",
            Student:"課堂為小班教學，師生比例為1:4",
            smallAge:"",
            bigAge: ""
            // • 簡單介紹肥皂好處 • 詳細講解漸層技巧及實作 渲染皂的不同調色材料 • 製作藝術皂所需注意技巧與事項
        }],
    }

    const productsList = JSON.stringify(products);
    localStorage.setItem('productsList',productsList);
    let activeIndex = 0;
    let navList = document.querySelector('.cart-nav-list');
    console.log(navList);
    

    //创建导航
    tabs.forEach(function (item, index) {
        // console.log('item ==> ', item);

        //创建li
        var li = document.createElement('li');

        //设置li的标签内容
        li.innerHTML = `<div>${item.title}</div>`;

        //设置data-type属性, 以便筛选商品数据
        li.dataset.type = item.type;

        //记录下标
        li.dataset.index = index;

        li.classList.add('nav-list-item')

        //追加激活类名
        if (activeIndex === index) {
          li.classList.add('li-active');
        }

        //将li放在navList
        navList.appendChild(li);

      })

      //获取所有的ul.nav-list>li
      //父节点.querySelector(css选择器)
      //父节点.querySelectorAll(css选择器)
      let navListLis = navList.querySelectorAll('li');

      for (let i = 0; i < navListLis.length; i++) {
        navListLis[i].onclick = function () {
          // console.log('this ==> ', this);

          //获取当前li的data-index属性
          let index = this.dataset.index;
          // console.log('index ==> ', index);

          if (activeIndex == index) {
            console.log('点击相同的li');
            return;
          }

          navListLis[activeIndex].classList.remove('li-active');

          activeIndex = index;

          //激活当前的li
          this.classList.add('li-active');

          //根据li的data-type属性获取商品数据
          let type = this.dataset.type;
          console.log('type ==> ', type);

          let data = products[type];
    
          createProduct(data);

        }
      }

      //初始化商品数据
      let initType = navListLis[activeIndex].dataset.type;
      console.log('initType ==> ', initType);
      createProduct(products[initType]);


      //生成数据
      function createProduct(data) {
        //data: 当前类型的数据, array
        // console.log('createProduct data ==> ', data);

        //获取ul.products-list
        let productsList = document.querySelector('.products-list');
        // console.log('productsList ==> ', productsList);

        productsList.innerHTML = '';

        //创建
        data.forEach(function (item) {

          // console.log('createProduct item ==> ', item);

          //创建li
          let li = document.createElement('li');


  //name, price,id,count,state
          //设置li的标签内容
          //<div class="show">${item.icon}</div>
          //<div>${item.courseDescription_p}</div>
          // <div class="course-short-des"><a href="${item.url}">About</a></div>
          /* 
                  <div class="course-top">
           <div class="course-photo-container">
        <div class="main-list">
          <a href="./images/C2-1.jpg">
            <img src="${item.img}" class="course-bigphoto-list" alt="">
          </a>
          <div class="course-select-detail">
            <h5>${item.courseTop}</h5>
            <div class="course-price-button">
              <ul class="course-button-list">
                
                <li><i>$${item.price}</i></li>
                <li><div><button class="btn" onclick="addToCart('${item.courseTop}',${item.price},${item.id},${item.count},${item.state})"><a href="./shoppingcart.html">Join</a></button></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
        </div> 
          */
         
          li.innerHTML = `
            <div class="course-list list-1">
        <img src="${item.img}" class="course-list-photo" alt="">
        <div class="course-title-small">
        <i>${item.courseTop}</i>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, consectetur.
        </p>
        <div><button onclick="addToCart('${item.courseTop}',${item.price},${item.id},${item.count},${item.state})"><a class="a" href="./shoppingcart.html">Join</a></button></div>
        </div>
      </div>
            `;
          //<div class="price fl"><span class="pri">￥</span><span class="pr">${item.price}</span></div>
// <div onclick=addToCart("${item.name}",'${item.price}',1,1,true)>1234</div>

          productsList.appendChild(li);

        })
}

function addToCart (name, price,id,count,state) {
        // console.log(name, price,id,count,state);
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let found = false;
    
        for(let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                cart[i].count += 1;
                found = true;
                break;
            }
        }
    
        if (!found) {
            cart.push({name:name,price:price,id:id,count:count,state:state});
        }
    
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCartUI();
    }

    
    function updateCartUI () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartDiv = document.getElementById('cart');
        cartDiv = '';
    
        if (cart.length === 0) {
            cartDiv.innerHTML = `<p>Your cart is empty</p>`
        } else {
            cartDiv.innerHTML += '<h3>Cart</h3>';
            cartDiv.innerHTML += '<ul>'
            for (let item of cart) {
                cartDiv.innerHTML += `<li>item.product-item.pricex{item.count}`
            }
            cartDiv.innerHTML += '<ul>'
            cartDiv.innerHTML += '<p>Total:{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>';
    
        }
    }
    
    window.onload = updateCartUI;
    

