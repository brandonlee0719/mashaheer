export type InfParamList = {
  Inf: {
    id: string;
    name: string;
    username?: string;
    email?: string;
    nmc: boolean;
    about?: string;
    nmcNumber: number;
    category?: string;
    photo: {
      url: string;
    };
  };
};
