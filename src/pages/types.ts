type SelectedOptions = {
  [id: string]: {
    [id: string]: boolean;
  };
};


type School = {
  id: string;
  name: string;
  geohash: string;
  dropoffLocations: string[];
  image: string;
};

type NotificationSettingsMap = {
  notifications: boolean | undefined;
  friendsOnly: boolean | undefined;
  textNotifs: boolean | undefined;
  mealTimes: boolean | undefined;
};

type User = {
  id: string;
  isUser: boolean | undefined;
  name: string;
  phoneNumber: string | undefined;
  city: string | undefined;
  pfp: string | undefined;
  username: string | undefined;
  restaurantId: string | undefined;
  email: string | undefined;
  referralCode: string | undefined;
  geohash: string | undefined;
  house: string | undefined;
  dropoffLocation: string | undefined;
  referrerUser: User | undefined;
  runsStarted: number | undefined;
  runsJoined: number | undefined;
  runPoints: number | undefined;
  school: School | undefined;
  contactUserIds: string[] | undefined;
  favoriteRestaurantIds: string[] | undefined;
  notificationSettings: boolean[] | undefined;
  notificationSettingsMap: NotificationSettingsMap | undefined;
};


type Option = {
  id: string;
  name: string;
  price: number | undefined;
  points: number | undefined;
  suspendUntil: number | undefined;
};

type FoodOption = {
  id: string;
  name: string;
  numChoices: number | undefined;
  minChoices: number | undefined;
  required: boolean;
  options: Option[];
};

type MenuReward = {
  points: number | undefined;
  discount: number | undefined;
  discountText: string | undefined;
};

type MenuItem = {
  id: string;
  name: string;
  description?: string | undefined;
  price: number;
  image?: string | undefined;
  foodOptions?: FoodOption[] | undefined;
  reward?: MenuReward | undefined;
  itemChoices?: MenuItem[] | undefined;
  isAlcohol?: boolean | undefined;
  restaurant?: Restaurant | undefined;
  suspendUntil?: number | undefined;
  taxRate: number;
};

type MenuCategory = {
  id: string;
  name: string;
  menuItems: MenuItem[];
  availability: {
    enabled: boolean;
    dayOfWeek: number;
    timePeriods: {
      startTime: string;
      endTime: string;
    }[];
  }[];
};

type RestaurantHours = {
  open: string;
  close: string;
};

type EstimatedTimeMinutes = {
  begin: number;
  end: number;
};

type Restaurant = {
  id: string;
  externalId: string;
  name: string | undefined;
  description: string | undefined;
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  phoneNumber: string | undefined;
  owner: User | undefined;
  hours: RestaurantHours[][] | undefined;
  thumbnail: string | undefined;
  menu: MenuCategory[] | undefined;
  emoji: string | undefined;
  averagePickupTime: EstimatedTimeMinutes | undefined;
  rewardItems: MenuItem[] | undefined;
  discountAmt: string | undefined;
  cashback: number | undefined;
};


type RewardPoints = {
  id: string;
  points: number;
  userId: string;
  restaurantId: string;
  restaurant: Restaurant;
};

type EstimatedTimeWindow = {
  begin: string;
  end: string;
};
