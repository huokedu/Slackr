Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:show, :index]
    resources :messages, except: [:new, :edit]
  end

  root to: 'static_pages#root'
end
