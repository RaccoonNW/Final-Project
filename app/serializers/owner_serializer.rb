class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :email, :notes
end
