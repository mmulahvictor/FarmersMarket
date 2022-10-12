Rails.application.routes.draw do
  resources :customers, only: [:create]
  resources :farmers, only: [:index, :show, :create, :destroy]
  resources :items
end
