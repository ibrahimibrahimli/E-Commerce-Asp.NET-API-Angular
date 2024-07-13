using E_Commerce.Application.BaseMesasges;
using E_Commerce.Application.ViewModels.Products;
using FluentValidation;

namespace E_Commerce.Application.Validators.Product
{
    public class CreateProductValidator : AbstractValidator<VMCreateProduct>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .WithMessage(UiMessages.RequiredMessage("Ad"))
                .MaximumLength(100)
                .WithMessage(UiMessages.MaxLengthMessage("Ad", 100))
                .MinimumLength(3)
                .WithMessage(UiMessages.MinLengthMessage("Ad", 3));

            RuleFor(p => p.Stock)
                .NotEmpty()
                .WithMessage(UiMessages.RequiredMessage("Stok"))
                .Must(s => s >= 0)
                .WithMessage(UiMessages.MinValueMessage("Stok",0));

            RuleFor(p => p.Price)
                .NotEmpty()
                .WithMessage(UiMessages.RequiredMessage("Qiymət"))
                .Must(p => p >= 0)
                .WithMessage(UiMessages.MinValueMessage("Qiymət", 0));
        }
    }
}
