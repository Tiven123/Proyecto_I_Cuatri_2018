Rails.application.routes.draw do
  resources :sales
  resources :repairs
  resources :spendings
  resources :entries
  resources :accessories
  resources :replacements
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
