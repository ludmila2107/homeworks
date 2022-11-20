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
  cache.push({ hash, value });
  if (cache.length > maxCacheValueCount) {
  cache.shift();
  }
  console.log("Вычисляем: " + value);
  return "Вычисляем: " + value;
  };
  }


function debounceDecoratorNew(func) {
  // Ваш код
}