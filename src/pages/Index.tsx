import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [steps, setSteps] = useState(7842);
  const [calories, setCalories] = useState(324);
  const [workouts, setWorkouts] = useState([
    { id: 1, type: 'Бег', duration: '30 мин', calories: 250, date: '2024-01-15' },
    { id: 2, type: 'Йога', duration: '45 мин', calories: 180, date: '2024-01-14' },
    { id: 3, type: 'Силовые', duration: '60 мин', calories: 320, date: '2024-01-13' },
  ]);

  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-fitness-indigo to-fitness-emerald flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-fitness-indigo rounded-2xl flex items-center justify-center">
            <Icon name="Activity" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl font-sf-pro font-semibold">FitTracker</CardTitle>
          <p className="text-fitness-gray-600 font-inter">Ваш персональный фитнес-помощник</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Input placeholder="Email" type="email" className="h-12" />
            <Input placeholder="Пароль" type="password" className="h-12" />
          </div>
          <Button className="w-full h-12 bg-fitness-indigo hover:bg-fitness-indigo/90 font-medium" onClick={() => setActiveTab('dashboard')}>
            Войти
          </Button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-fitness-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-fitness-gray-500">или</span>
            </div>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12 font-medium">
              <Icon name="Chrome" size={18} className="mr-2" />
              Войти через Google
            </Button>
            <Button variant="outline" className="w-full h-12 font-medium">
              <Icon name="Facebook" size={18} className="mr-2" />
              Войти через Facebook
            </Button>
          </div>
          <p className="text-center text-sm text-fitness-gray-600 mt-4">
            Нет аккаунта? <Button variant="link" className="p-0 text-fitness-indigo font-medium">Регистрация</Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-fitness-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-fitness-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-fitness-indigo rounded-xl flex items-center justify-center">
              <Icon name="Activity" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-sf-pro font-semibold">FitTracker</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setActiveTab('profile')}>
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-fitness-gray-600 text-sm font-inter">Шаги сегодня</p>
                  <p className="text-2xl font-sf-pro font-semibold">{steps.toLocaleString()}</p>
                  <Progress value={78} className="w-full h-2" />
                </div>
                <div className="w-12 h-12 bg-fitness-indigo/10 rounded-xl flex items-center justify-center">
                  <Icon name="Footprints" size={24} className="text-fitness-indigo" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-fitness-gray-600 text-sm font-inter">Калории</p>
                  <p className="text-2xl font-sf-pro font-semibold">{calories}</p>
                  <Progress value={65} className="w-full h-2" />
                </div>
                <div className="w-12 h-12 bg-fitness-emerald/10 rounded-xl flex items-center justify-center">
                  <Icon name="Flame" size={24} className="text-fitness-emerald" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-fitness-gray-600 text-sm font-inter">Активное время</p>
                  <p className="text-2xl font-sf-pro font-semibold">2ч 15м</p>
                  <Progress value={45} className="w-full h-2" />
                </div>
                <div className="w-12 h-12 bg-fitness-indigo/10 rounded-xl flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-fitness-indigo" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="font-sf-pro">Быстрые действия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button 
                variant="outline" 
                className="h-20 flex-col space-y-2 hover:bg-fitness-indigo hover:text-white transition-colors"
                onClick={() => setActiveTab('workout')}
              >
                <Icon name="Play" size={24} />
                <span className="text-sm font-medium">Начать тренировку</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-fitness-emerald hover:text-white transition-colors">
                <Icon name="Target" size={24} />
                <span className="text-sm font-medium">Установить цель</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-fitness-indigo hover:text-white transition-colors">
                <Icon name="Camera" size={24} />
                <span className="text-sm font-medium">Фото прогресса</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-fitness-emerald hover:text-white transition-colors">
                <Icon name="Share2" size={24} />
                <span className="text-sm font-medium">Поделиться</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Workouts */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-sf-pro">Последние тренировки</CardTitle>
            <Button variant="ghost" onClick={() => setActiveTab('stats')}>
              <span className="text-sm">Показать все</span>
              <Icon name="ChevronRight" size={16} className="ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {workouts.slice(0, 3).map((workout) => (
                <div key={workout.id} className="flex items-center justify-between p-3 rounded-xl bg-fitness-gray-50 hover:bg-fitness-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-fitness-indigo rounded-lg flex items-center justify-center">
                      <Icon name="Dumbbell" size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-sf-pro font-medium">{workout.type}</p>
                      <p className="text-sm text-fitness-gray-600">{workout.duration} • {workout.calories} ккал</p>
                    </div>
                  </div>
                  <p className="text-sm text-fitness-gray-500">{new Date(workout.date).toLocaleDateString('ru-RU')}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const WorkoutScreen = () => (
    <div className="min-h-screen bg-fitness-gray-50">
      <div className="bg-white border-b border-fitness-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button variant="ghost" onClick={() => setActiveTab('dashboard')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <h1 className="text-xl font-sf-pro font-semibold">Добавить тренировку</h1>
          <div></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <Card className="border-0 shadow-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="font-sf-pro">Выберите тип тренировки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: 'Бег', icon: 'PersonStanding', color: 'fitness-indigo' },
                { type: 'Йога', icon: 'Waves', color: 'fitness-emerald' },
                { type: 'Силовые', icon: 'Dumbbell', color: 'fitness-indigo' },
                { type: 'Велосипед', icon: 'Bike', color: 'fitness-emerald' },
                { type: 'Плавание', icon: 'Waves', color: 'fitness-indigo' },
                { type: 'Кардио', icon: 'Heart', color: 'fitness-emerald' },
              ].map((workout) => (
                <Button
                  key={workout.type}
                  variant="outline"
                  className={`h-24 flex-col space-y-2 hover:bg-${workout.color} hover:text-white transition-colors`}
                >
                  <Icon name={workout.icon} size={24} />
                  <span className="font-medium">{workout.type}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-sf-pro">Параметры тренировки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-fitness-gray-700">Длительность (мин)</label>
                <Input placeholder="30" type="number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-fitness-gray-700">Расстояние (км)</label>
                <Input placeholder="5.0" type="number" step="0.1" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-fitness-gray-700">Заметки</label>
              <Input placeholder="Отличная тренировка в парке" />
            </div>
            <Button className="w-full h-12 bg-fitness-indigo hover:bg-fitness-indigo/90 font-medium">
              Сохранить тренировку
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const StatsScreen = () => (
    <div className="min-h-screen bg-fitness-gray-50">
      <div className="bg-white border-b border-fitness-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button variant="ghost" onClick={() => setActiveTab('dashboard')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <h1 className="text-xl font-sf-pro font-semibold">Статистика</h1>
          <div></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <Card className="border-0 shadow-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="font-sf-pro">Прогресс за период</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="week" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="week">Неделя</TabsTrigger>
                <TabsTrigger value="month">Месяц</TabsTrigger>
                <TabsTrigger value="year">Год</TabsTrigger>
              </TabsList>
              <TabsContent value="week" className="space-y-4 mt-4">
                <div className="h-64 bg-fitness-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Icon name="TrendingUp" size={48} className="text-fitness-indigo mx-auto" />
                    <p className="text-fitness-gray-600 font-inter">График прогресса за неделю</p>
                    <p className="text-sm text-fitness-gray-500">Здесь будет отображаться динамика ваших показателей</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="month" className="space-y-4 mt-4">
                <div className="h-64 bg-fitness-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Icon name="BarChart3" size={48} className="text-fitness-emerald mx-auto" />
                    <p className="text-fitness-gray-600 font-inter">Статистика за месяц</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="year" className="space-y-4 mt-4">
                <div className="h-64 bg-fitness-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Icon name="Activity" size={48} className="text-fitness-indigo mx-auto" />
                    <p className="text-fitness-gray-600 font-inter">Годовой отчет</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-sf-pro">Достижения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: '10K шагов', desc: 'Пройдено за день', completed: true },
                  { title: 'Недельная цель', desc: '5 тренировок', completed: true },
                  { title: '1000 калорий', desc: 'Сожжено за день', completed: false },
                ].map((achievement, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-fitness-gray-50">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      achievement.completed ? 'bg-fitness-indigo' : 'bg-fitness-gray-300'
                    }`}>
                      <Icon name="Trophy" size={18} className={achievement.completed ? 'text-white' : 'text-fitness-gray-500'} />
                    </div>
                    <div>
                      <p className="font-sf-pro font-medium">{achievement.title}</p>
                      <p className="text-sm text-fitness-gray-600">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-sf-pro">Активность по дням</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, i) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-fitness-gray-700 w-8">{day}</span>
                    <div className="flex-1 mx-3">
                      <Progress value={Math.random() * 100} className="h-2" />
                    </div>
                    <span className="text-sm text-fitness-gray-600 w-12 text-right">
                      {Math.floor(Math.random() * 60 + 20)}м
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="min-h-screen bg-fitness-gray-50">
      <div className="bg-white border-b border-fitness-gray-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button variant="ghost" onClick={() => setActiveTab('dashboard')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <h1 className="text-xl font-sf-pro font-semibold">Профиль</h1>
          <Button variant="ghost">
            <Icon name="Settings" size={20} />
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <Card className="border-0 shadow-sm animate-fade-in">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-fitness-indigo to-fitness-emerald rounded-full mx-auto flex items-center justify-center">
                <Icon name="User" size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-sf-pro font-semibold">Александр Иванов</h2>
                <p className="text-fitness-gray-600 font-inter">alexivanov@email.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-sf-pro">Персональная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-fitness-gray-700">Возраст</label>
                <Input placeholder="28" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-fitness-gray-700">Вес (кг)</label>
                <Input placeholder="75" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-fitness-gray-700">Цель</label>
              <select className="w-full h-10 px-3 py-2 border border-fitness-gray-200 rounded-md bg-white">
                <option>Похудение</option>
                <option>Набор массы</option>
                <option>Поддержание формы</option>
                <option>Улучшение выносливости</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-sf-pro">Настройки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Уведомления</span>
              <Button variant="outline" size="sm">Настроить</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Конфиденциальность</span>
              <Button variant="outline" size="sm">Настроить</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Синхронизация</span>
              <Button variant="outline" size="sm">Apple Health</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (activeTab) {
      case 'login':
        return <LoginScreen />;
      case 'dashboard':
        return <Dashboard />;
      case 'workout':
        return <WorkoutScreen />;
      case 'stats':
        return <StatsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <LoginScreen />;
    }
  };

  return (
    <div className="font-inter">
      {renderScreen()}
    </div>
  );
};

export default Index;