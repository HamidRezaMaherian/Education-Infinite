using Edu_Infinite.Admin.App._keenthemes.libs;

namespace Edu_Infinite.Admin.App._keenthemes;

public interface IBootstrapBase
{
    void InitThemeMode();

    void InitThemeDirection();

    void InitRtl();

    void InitLayout();

    void Init(IKTTheme theme);
}