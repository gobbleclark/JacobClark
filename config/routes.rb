Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts
  end
  
  
  get '/search', to: 'api/posts#search'
  get '*other', to: 'static#index'
end
