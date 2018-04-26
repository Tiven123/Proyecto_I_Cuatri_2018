require 'test_helper'

class ReplacementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @replacement = replacements(:one)
  end

  test "should get index" do
    get replacements_url, as: :json
    assert_response :success
  end

  test "should create replacement" do
    assert_difference('Replacement.count') do
      post replacements_url, params: { replacement: { brand: @replacement.brand, description: @replacement.description, model: @replacement.model, price: @replacement.price, quantity: @replacement.quantity, type: @replacement.type } }, as: :json
    end

    assert_response 201
  end

  test "should show replacement" do
    get replacement_url(@replacement), as: :json
    assert_response :success
  end

  test "should update replacement" do
    patch replacement_url(@replacement), params: { replacement: { brand: @replacement.brand, description: @replacement.description, model: @replacement.model, price: @replacement.price, quantity: @replacement.quantity, type: @replacement.type } }, as: :json
    assert_response 200
  end

  test "should destroy replacement" do
    assert_difference('Replacement.count', -1) do
      delete replacement_url(@replacement), as: :json
    end

    assert_response 204
  end
end
