require 'test_helper'

class SpendingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @spending = spendings(:one)
  end

  test "should get index" do
    get spendings_url, as: :json
    assert_response :success
  end

  test "should create spending" do
    assert_difference('Spending.count') do
      post spendings_url, params: { spending: { amount: @spending.amount, date: @spending.date, description: @spending.description } }, as: :json
    end

    assert_response 201
  end

  test "should show spending" do
    get spending_url(@spending), as: :json
    assert_response :success
  end

  test "should update spending" do
    patch spending_url(@spending), params: { spending: { amount: @spending.amount, date: @spending.date, description: @spending.description } }, as: :json
    assert_response 200
  end

  test "should destroy spending" do
    assert_difference('Spending.count', -1) do
      delete spending_url(@spending), as: :json
    end

    assert_response 204
  end
end
