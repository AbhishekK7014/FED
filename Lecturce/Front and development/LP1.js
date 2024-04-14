let menu = ['choice rice','kadhai paneer','rajma rice','garlic bread',
'kadhai chicken','potato','chicken tandoori','fish fry', 'Idli','Dosa','kadhai chaap',
'momos','onion'];


let JainMenu = menu.filter((item) => {
    if(item.indexof('chicken') !== -1 ||item.indexof('fish') !== -1 ||
    item.indexof('onion') !== -1 ||item.indexof('potato') !== -1 ||
    item.indexof('garlic bread') !== -1)
    {
        return false;
    }else{
        return true;
    }
    
});
console.log(JainMenu);
