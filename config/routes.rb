Rails.application.routes.draw do
  resources :customers only: [:index, :show, :destroy]
  resources :farmers only: [:index, :show, :destroy]
  resources :items
end
