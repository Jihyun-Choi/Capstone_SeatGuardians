from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    def create_user(self, email, password, username=""):
        if not email:
            raise ValueError(_("Users must have an email address"))
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, username):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
        )
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Model definition for User."""
    USERNAME_FIELD = "email"
    email = models.EmailField(
        verbose_name=_("email"),
        max_length=200,
        unique=True,
    )  # 이메일
    username = models.CharField(
        verbose_name=_("username"),
        max_length=50,
        unique=True,
    )  # 유저네임
    is_active = models.BooleanField(
        verbose_name=_("Is active"),
        default=True,
    )  # 유저가 활성화되어있는지 여부
    created_at = models.DateTimeField(
        verbose_name=_("created at"),
        auto_now_add=True,
    )  # 유저 레코드가 생성된 일저
    updated_at = models.DateTimeField(
        verbose_name=_("updated at"),
        auto_now=True,
    )  # 유저 레코드가 수정된 일자

    objects = UserManager()

    class Meta:
        """Meta definition for User."""
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = "users"

    def __str__(self):
        """Unicode representation of User."""
        return f"{self.email}({self.username})"

    @property
    def is_staff(self):
        return self.is_superuser
