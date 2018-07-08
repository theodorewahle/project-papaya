class BaseConfig:
    """Base configuration"""
    DEBUG = True
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'postgres://papaya:greenpink@project-papaya.cab8do2hlpay.us-east-1.rds.amazonaws.com:5432/papaya' 
