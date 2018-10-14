

const slideshow = () => {
    return $.ajax({
        url:'/api/damai', //http:localhost:3000/damai
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}
//https://mtop.damai.cn/h5/mtop.damai.wireless.configure.msite.list/1.0/?jsv=2.4.16&appKey=12574478&t=1539434051498&sign=59d832c500fe3088889c202948c4460e&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.configure.msite.list&data=%7B%22cityId%22%3A%220%22%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D
//https://mtop.damai.cn/h5/mtop.damai.wireless.configure.msite.list/1.0/?jsv=2.4.16&appKey=12574478&t=1539434051498&sign=59d832c500fe3088889c202948c4460e&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.configure.msite.list&data=%7B%22cityId%22%3A%220%22%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D
const main_nav_list = ()=>{
    return $.ajax({
        url:'/damai/h5/mtop.damai.wireless.search.search.artistproject.get/1.0/?jsv=2.4.16&appKey=12574478&t=1539434054431&sign=1768540e9dc3240241b6f0b63060e74d&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search.artistproject.get&data=%7B%22categoryId%22%3A%221%22%2C%22topN%22%3A10%2C%22loginKeyH5%22%3Anull%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D/h5/mtop.damai.wireless.search.search.artistproject.get/1.0/?jsv=2.4.16&appKey=12574478&t=1539434054431&sign=1768540e9dc3240241b6f0b63060e74d&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search.artistproject.get&data=%7B%22categoryId%22%3A%221%22%2C%22topN%22%3A10%2C%22loginKeyH5%22%3Anull%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D', //http:localhost:8080/damai
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}

const main_artist_list = ()=>{
    return $.ajax({
        url:'/damai/h5/mtop.damai.wireless.search.search.artistproject.get/1.0/?jsv=2.4.16&appKey=12574478&t=1539434054431&sign=1768540e9dc3240241b6f0b63060e74d&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search.artistproject.get&data=%7B%22categoryId%22%3A%221%22%2C%22topN%22%3A10%2C%22loginKeyH5%22%3Anull%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D/h5/mtop.damai.wireless.search.search.artistproject.get/1.0/?jsv=2.4.16&appKey=12574478&t=1539434054431&sign=1768540e9dc3240241b6f0b63060e74d&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search.artistproject.get&data=%7B%22categoryId%22%3A%221%22%2C%22topN%22%3A10%2C%22loginKeyH5%22%3Anull%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D', //http:localhost:8080/damai
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}
//  url: '/lagou/listmore.json?pageNo='+ pageNo +'&pageSize=15'
const more_list = ()=>{
    return $.ajax({
        url:'/damai/h5/mtop.damai.wireless.search.search/1.0/?jsv=2.4.16&appKey=12574478&t=1539497428207&sign=52d52c9460cf4a018e78742f509a3dea&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search&data=%7B%22cityId%22%3A0%2C%22distanceCityId%22%3A0%2C%22longitude%22%3Anull%2C%22latitude%22%3Anull%2C%22pageIndex%22%3A1%2C%22pageSize%22%3A20%2C%22sortType%22%3Anull%2C%22categoryId%22%3A0%2C%22dateType%22%3A0%2C%22option%22%3A31%2C%22sourceType%22%3A21%2C%22returnItemOption%22%3A3%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D', //http:localhost:8080/damai
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}

export default {
    slideshow,
    main_nav_list,
    main_artist_list,
    more_list
}