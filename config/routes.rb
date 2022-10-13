Rails.application.routes.draw do
  resources :customers, only: [:create]
  resources :farmers, only: [:index, :show, :create, :destroy]
  resources :items
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
