require 'test_helper'

class AccessoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @accessory = accessories(:one)
  end

  test "should get index" do
    get accessories_url, as: :json
    assert_response :success
  end

  test "should create accessory" do
    assert_difference('Accessory.count') do
      post accessories_url, params: { accessory: { brand: @accessory.brand, description: @accessory.description, model: @accessory.model, price: @accessory.price, quantity: @accessory.quantity, type: @accessory.type } }, as: :json
    end

    assert_response 201
  end

  test "should show accessory" do
    get accessory_url(@accessory), as: :json
    assert_response :success
  end

  test "should update accessory" do
    patch accessory_url(@accessory), params: { accessory: { brand: @accessory.brand, description: @accessory.description, model: @accessory.model, price: @accessory.price, quantity: @accessory.quantity, type: @accessory.type } }, as: :json
    assert_response 200
  end

  test "should destroy accessory" do
    assert_difference('Accessory.count', -1) do
      delete accessory_url(@accessory), as: :json
    end

    assert_response 204
  end
end
