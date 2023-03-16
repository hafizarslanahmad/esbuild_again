class Post < ApplicationRecord
    has_one_attached :avatar
    def self.ransackable_attributes(auth_object = nil)
        ["created_at", "description", "id", "name", "updated_at"]
      end
      validates :name, presence: true
      validates :description, presence: true
end
