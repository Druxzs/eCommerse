const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit odio corrupti deleniti reiciendis, consequatur architecto!'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit odio corrupti deleniti reiciendis, consequatur architecto!'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit odio corrupti deleniti reiciendis, consequatur architecto!'
    } 
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

nxtBtn.addEventListener('click', () => {
    if(currentProduct >= productData.length - 1 ){
        currentProduct = 0
    } else {
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)

    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(() => {
        //Ejecuta despues de 500ms, cambia texto
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = 
        `
        img/${productData[currentProduct].image}
        `
    }, 500)

    setTimeout(() => {

    }, 2000)
    smImgContainer.classList.remove('slide')
    productImgContainer.classList.remove('slide')
    backdropImg.classList.remove('fade')
    productDetail.classList.remove('fade')
})