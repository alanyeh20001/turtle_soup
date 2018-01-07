namespace :soups do
  desc "change pending-state soups to active"
  task change_pending_to_active_state: :environment do
    Soup.where(state: "pending").find_each do |soup|
      soup.continue! if soup.may_continue?
    end
  end
end
