function mooncakeSays (message) { 
  let mooncake = '(oO.o)'
  
  if (!message) { 
    return '${mooncake} chookify?'; 
  }
  return '${mooncake} ${message};
  }
  module.exports.mooncakeSays = mooncakeSays; 
  
