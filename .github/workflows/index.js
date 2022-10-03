function mooncakeSays (message) { 
  let mooncake = '(o.o)'
  
  if (!message) { 
    return '${mooncake} chookify?'; 
  }
  return '${mooncake} ${message};
  }
  module.exports.mooncakeSays = mooncakeSays; 
  
