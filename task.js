function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValueCount = 5;

  return (...args) => {
    const hash = args.join(",");
    let objectFromCache = cache.find((item) => item.hash === hash);
    if (objectFromCache) {
      console.log("Из кэша: " + objectFromCache.value);
      return "Из кэша: " + objectFromCache.value;
    }

    const value = func(...args);
    cache.push({
      hash,
      value
    });
    if (cache.length > maxCacheValueCount) {
      cache.shift();
    }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
  };
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }
  return wrapper;
}