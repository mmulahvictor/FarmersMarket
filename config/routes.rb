Rails.application.routes.draw do
  resources :customers, only: [:create]
  resources :farmers, only: [:index, :show, :create, :destroy]
  resources :items
  # get '/items', to: 'items#index'
  # get 'items/:id', to: 'items#show'
end
