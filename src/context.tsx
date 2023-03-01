import React, { createContext, useContext, useReducer } from 'react';
import { useAppDispatch } from './app/hooks';
import { weatherSlice } from './features/Weather/WeatherSlice';
import {
  RequestState,
  WeatherType,
  Status,
  initialWeather,
} from './app/models';

export const WeatherContext = createContext<RequestState>({
  value: initialWeather,
  setValue: () => {},
  status: Status.idle,
  setStatus: () => {},
  errors: [],
  setErrors: () => {},
});

export const useWeatherContext = () => useContext(WeatherContext);