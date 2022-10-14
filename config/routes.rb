Rails.application.routes.draw do
  resources :items, only: [:index, :create, :destroy]
  post "/signup", to: "farmers#create"
  get "/me", to: "farmers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
