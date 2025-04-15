// Этот файл содержит код инициализации серверных ресурсов.
// Выполняется автоматически при импорте в layout.tsx

// Выполняем код только на сервере
if (typeof window === 'undefined') {
  // Логирование запуска сервера
  console.log('🚀 Initializing server resources...');

  // Здесь можно добавить другие инициализации серверных ресурсов при необходимости
  console.log('✅ Server resources initialized successfully');
}
