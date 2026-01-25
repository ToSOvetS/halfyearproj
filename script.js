async function loadBouquets() {
    try {
        // Запрашиваем JSON файл
        const response = await fetch('data.json');
        
        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        // Парсим JSON данные
        const bouquets = await response.json();
        
        // Возвращаем данные или обрабатываем их
        return bouquets;
        
    } catch (error) {
        console.error('Не удалось загрузить данные о букетах:', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
}
let flows = loadBouquets();
console.log(flows);