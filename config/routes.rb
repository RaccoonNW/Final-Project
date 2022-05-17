Rails.application.routes.draw do

  get '/users', to: 'users#index'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/organized', to: "owners#org_owners"

  resources :owners, only: [:index, :show, :update, :create]
  resources :houses, only: [:index, :show, :update]
  resources :house_owners, only: [:index, :show, :create]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
