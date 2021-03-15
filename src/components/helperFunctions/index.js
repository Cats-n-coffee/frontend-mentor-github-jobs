export const formatDate = (dateRetreived) => {
    let today = new Date();
    let postDate = Date.parse(new Date(dateRetreived));

    var subtract = Math.floor(Math.abs(today - postDate) / 36e5);
  
    if (subtract < 23) {
      return `${subtract}h ago`;
    }
    else if (subtract > 23 && subtract < 167) {
      subtract = Math.ceil(subtract / 24);
      return `${subtract}d ago`;
    }
    else if (subtract > 167) {
      subtract = Math.ceil(subtract / 168);
      return `${subtract}w ago`;
    }
}

export const formatUrl = (urlString) => {
    var newStr;
    
    if (urlString.endsWith('/')) {
      newStr = urlString.slice(0, urlString.lastIndexOf('/'));
    }
    else {
      newStr = urlString;
    }
    console.log(newStr, '1')
    
    if (newStr.includes('www')) {
      newStr = newStr.slice((newStr.indexOf('www.')) + 3);
    }
    if (!newStr.includes('www')) {
      newStr = newStr.slice((newStr.indexOf('//')) + 2);
    }
    
    return newStr;
}