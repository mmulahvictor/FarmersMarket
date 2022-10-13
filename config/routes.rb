Rails.application.routes.draw do
  resources :items, only: [:index, :create]
  post "/signup", to: "farmers#create"
  get "/me", to: "farmers#show"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
end
